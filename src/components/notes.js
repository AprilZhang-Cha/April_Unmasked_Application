import React, {
    Component,
}
    from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NoteDetails from './noteDetails';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class Note extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            editMode: this.props.editMode,
        };

    }



    render() {
        if ( this.props.allNotes.length !== 0 ) {
            if ( this.props.editMode || this.props.createMode ) {

                return (
                    <View style={styles.half}>

                        <ScrollView>
                            {
                                this.props.allNotes.map( ( u, i ) => {

                                    return (
                                        <NoteDetails note={u} id={i} style={styles.cards}
                                            onEdit={this.props.onEdit}
                                            onDelete={this.props.onDelete}
                                            onSubmit={this.props.onSubmit}
                                            StartToEdit={this.props.StartToEdit}
                                            unEdit={this.props.unEdit} />
                                    )

                                } )
                            }

                        </ScrollView >

                    </View >

                );
            }
            if ( !this.props.editMode && !this.props.createMode ) {

                return (

                    <View style={styles.whole}>

                        <ScrollView>
                            {
                                this.props.allNotes.map( ( u, i ) => {

                                    return (
                                        <NoteDetails
                                            note={u}
                                            id={i}
                                            editMode={this.props.editMode}
                                            style={styles.cards}
                                            onEdit={this.props.onEdit}
                                            onDelete={this.props.onDelete}
                                            onSubmit={this.props.onSubmit}
                                            StartToEdit={this.props.StartToEdit}
                                            unEdit={this.props.unEdit}
                                        />
                                    )

                                } )
                            }

                        </ScrollView >

                    </View >

                );

            }

        }
        else {
            return (
                <View style={{ justifyContent: "center", marginTop: hp( 30 ) }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 29, color: '#fff', fontStyle: 'italic', fontFamily: 'Cochin', marginBottom: 30, alignSelf: "center" }}>
                        No Posts :(
                    </Text>
                </View >
            )
        }
    }
}
export default Note;

const styles = StyleSheet.create( {
    half: {

        height: hp( 55 ),
        opacity: 0.65,
        width: '90%',
        backgroundColor: '#659196',
        marginTop: hp( 2 ),
        marginBottom: hp( 5 ),
        borderRadius: 5,


    },
    whole: {

        height: hp( 78 ),
        opacity: 0.7,
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#3E5A5F',
        // backgroundColor: '#2A4549',
        marginTop: hp( 8 ),
        marginBottom: hp( 8 ),

    },
    cards: {
        height: hp( 16 ),
        padding: hp( 2 ),
        width: wp( 50 ),
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
        marginHorizontal: hp( 2 ),
        flexDirection: 'row',
        fontFamily: 'Cochin',
    },



} );