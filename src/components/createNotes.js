import React, {
    Component,
}
    from 'react';

import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Notes from './notes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class CreateNotes extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            createMode: false,
            editMode: false,
            button: 'create',
            allNotes: this.props.allNotes,

        };
    }

    // set title and content
    setTitle = ( event ) => {
        const title = {
            title: event.nativeEvent.text,
        };
        this.setState( title );

    }
    setContent = ( event ) => {
        const content = {
            content: event.nativeEvent.text,
        };
        this.setState( content );

    }


    onSubmit = () => {
        this.setState( { createMode: false, } );
        const note = {
            title: this.state.title,
            content: this.state.content,
            id: this.props.id,
        };

        this.props.onSubmit( note );
        this.setState( { title: '', content: '', createMode: false, button: 'create' } );
    }

    onCreatePress = () => {
        if ( this.state.button === 'create' ) {
            this.setState( { createMode: true, button: 'cancel' } );
        }
        else {
            //in cancel mode cancel the create
            this.setState( { createMode: !this.state.createMode, button: 'create' } );
        }
    }

    // pass the edit in 

    StartToEdit = ( note, id ) => {
        this.setState(
            {

                editMode: true,
                note: note,
                id: id,
            },
        );

    }

    onTitleEdit = ( text ) => {

        const note = {
            title: text,
            content: this.state.note.content,
        };

        this.setState( { note } );
    }
    onContentEdit = ( text ) => {
        const note = {
            title: this.state.note.title,
            content: text,
        };
        this.setState( { note } );
    }

    Edited = () => {
        this.setState( { editMode: false } );
        this.props.onEdit( this.state.note, this.state.id );
    }


    onDeleteAll = () => {
        this.props.onDeleteAll();
        this.setState( { allNotes: [], editMode: false, } );

    }

    unEdit = () => {

        this.setState( { editMode: false } );

    }



    createCard = ( note ) => {
        if ( this.state.createMode && this.state.editMode === false ) {

            return (
                <View style={styles.createMode}>
                    <Card title='New Note' titleStyle={{ fontFamily: 'Courier', fontSize: hp( 1.9 ) }}
                    >

                        <TextInput
                            style={{ borderBottomColor: 'grey', borderBottomWidth: 1, fontFamily: 'Cochin', width: wp( 72 ), fontSize: hp( 2.3 ), }}
                            autoCorrect
                            placeholder='enter title here'
                            multiline={false}
                            onChange={this.setTitle}
                        />
                        <TextInput
                            style={{ marginTop: hp( 1.8 ), borderBottomColor: 'grey', borderBottomWidth: 0.3, fontFamily: 'Cochin', fontSize: hp( 2 ), marginBottom: hp( 1 ) }}
                            placeholder='enter content here'
                            onChange={this.setContent}
                        />
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: hp( 3 ), width: wp( 70 ), }} onPress={this.onSubmit}>
                            <Icon name="check" size={hp( 3 )} style={{ alignSelf: 'center', justifyContent: 'center', }} />
                        </TouchableOpacity>

                    </Card>
                </ View >

            )
        }

        if ( this.state.editMode && note !== null && this.state.createMode === false ) {
            return (
                <View style={styles.createMode}>
                    <Card title='edit' titleStyle={{ fontFamily: 'Courier', fontSize: hp( 2 ) }} >
                        <TextInput
                            style={{ borderBottomColor: 'grey', borderBottomWidth: 1, fontFamily: 'Cochin', fontSize: hp( 2.5 ), width: wp( 72 ), }}
                            autoCorrect
                            multiline={true}
                            onChangeText={this.onTitleEdit}
                            value={note.title}
                        />
                        <TextInput
                            style={{ marginTop: hp( 2.5 ), borderBottomColor: 'grey', borderBottomWidth: 0.3, fontFamily: 'Cochin' }}
                            value={note.content}
                            multiline={true}
                            onChangeText={this.onContentEdit}
                        />
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', height: hp( 3 ), width: wp( 70 ), }} onPress={this.Edited}>
                            <Icon name="check" size={hp( 3 )} style={{ alignSelf: 'center', justifyContent: 'center', }} />
                        </TouchableOpacity>
                    </Card>
                </ View >

            )
        }
        if ( this.state.editMode && this.state.createMode ) {
            this.setState( { editMode: false, createMode: false, button: 'create', } );

            alert( 'You can only edit or create one item at a time!' );

        }
    }







    render() {

        if ( this.props.allNotes.length !== 0 ) {
            return (
                <View style={styles.container}>

                    <TouchableOpacity style={styles.createButton} onPress={this.onCreatePress} >
                        <Text style={styles.text}>
                            {this.state.button}
                        </Text>
                    </TouchableOpacity>
                    <View>
                        {this.createCard( this.state.note )}
                    </View>
                    <View style={styles.Notes}>
                        <Notes
                            onEdit={this.props.onEdit}
                            onDelete={this.props.onDelete}
                            onDeleteAll={this.props.onDeleteAll}
                            allNotes={this.props.allNotes}
                            StartToEdit={this.StartToEdit}
                            unEdit={this.unEdit}
                            editMode={this.state.editMode}
                            createMode={this.state.createMode} />
                    </View>
                    <View style={styles.footbar}>
                        <TouchableOpacity style={styles.DeleteButton} onPress={this.onDeleteAll}>
                            <Text style={styles.text}>
                                Delete All
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>



            );
        }
        if ( this.props.allNotes.length === 0 ) {
            return (
                <View style={styles.container}>

                    <TouchableOpacity style={styles.createButton} onPress={this.onCreatePress}>
                        <Text style={styles.text}>
                            {this.state.button}
                        </Text>
                    </TouchableOpacity>
                    <View>
                        {this.createCard( this.state.note )}
                    </View>
                    <View style={styles.Notes}>
                        <Notes
                            onEdit={this.props.onEdit}
                            onDelete={this.props.onDelete}
                            onDeleteAll={this.props.onDeleteAll}
                            allNotes={this.props.allNotes}
                            StartToEdit={this.StartToEdit}
                            editMode={this.state.editMode}
                            createMode={this.state.createMode}

                        />
                    </View>
                </View>
            )

        }
    }
}

export default CreateNotes;

const styles = StyleSheet.create( {

    container: {
        width: wp( 100 ),
        marginTop: hp( 2 ),
        marginBottom: hp( 6 ),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',


    },

    createButton: {

        marginTop: hp( 7),
        marginBottom: hp( 5),
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFC9C5',
        borderRadius: 55,
        height: hp( 4.5 ),
        width: wp( 30 ),
        padding: 5,
        borderRadius: 100,
        zIndex: 1,
        fontFamily: 'Cochin',


    },
    DeleteButton: {

        marginBottom: hp( 2 ),
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#EFC9C5',
        borderRadius: 85,
        height: hp( 5 ),
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp( 30 ),
        borderRadius: 100,
        marginTop: hp(1),
    },

    createMode: {

        height: hp( 10 ),
        alignItems: 'center',
        position: 'relative',
        marginBottom: hp( 15 ),
        opacity: 0.8,
        borderRadius: 14,
    },

    text: {
        fontFamily: 'Cochin', fontSize: hp( 2.5 ),

    },
    footbar: {

        marginBottom: hp( 7 ),

    }


} );