import React, {
    Component,
}
    from 'react';

import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class NoteDetails extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            editMode: false,
            id: this.props.id,
            editID: -1,
            deleteID: -1,
        };

    }



    StartToEdit = () => {
        this.setState( { editID: this.props.id } );
        this.props.StartToEdit( this.props.note, this.props.id );

    }


    onTitleEdit = ( event ) => {
        const edits = {
            title: event.nativeEvent.text,
        };
        this.setState( { title: edits } );
    }
    onContentEdit = ( event ) => {
        const edits = {
            content: event.nativeEvent.text,
        };
        this.setState( { content: edits } );
    }

    onEditing = () => {
        this.setState( { editMode: false } );
        this.props.onEdit( this.props.note, this.props.id );
    }


    onDelete = () => {
        const id = this.props.id
        if ( id === this.state.editID ) {
            this.props.unEdit();
        }
        this.props.onDelete( this.props.id );




    }







    render() {

        return (
            <View>
                <Card title={this.props.note.title} style={styles.card} titleStyle={{ color: '#2A4549' }} containerStyle={styles.cardContainer}>
                    <Text style={styles.text}>{this.props.note.content}</Text>
                    <View style={styles.buttons}>
                        <Icon name="edit" onPress=
                            {this.StartToEdit} key={this.props.id} size={20} />
                        <Icon name="delete"
                            onPress={this.onDelete} size={20} />
                    </View>
                </Card>
            </View>
        );



    }
}


export default NoteDetails;

const styles = StyleSheet.create( {

    card: {

        height: hp( 10),
        padding: 10,
        width: wp( 50 ),
        marginBottom: hp( 10 ),
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
        marginHorizontal: 20,
        flexDirection: 'row',
        fontFamily: "Cochin",
        borderRadius: 20,
    },
    cardContainer: {
        borderRadius: 5,
        marginBottom: hp( 1 ),
        marginHorizontal: wp( 4 ),
    },
    text:
    {

        padding: 10,
        width: wp( 72 ),
        fontWeight: '200',
        fontSize: hp(2.5),
        marginBottom: hp( 1 ),
        fontFamily: "Cochin",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp( 5 ),
        flexDirection: 'row',

    },
    buttons:
    {

        padding: 0,

        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: hp( 5 ),
        flexDirection: 'row',
        borderRadius: 15,

    }

} );