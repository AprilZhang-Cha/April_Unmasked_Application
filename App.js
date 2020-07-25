import { StatusBar } from 'expo-status-bar';
import React, {
  Component,
}
  from 'react';

import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CreateNotes from './src/components/createNotes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const posts = require( './src/posts.json' );
class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      allNotes: posts,

    };
  }


  onSubmit = ( note ) => {
    const curr = this.state.allNotes;
    if ( note.title ) {
      curr.push( note );

      this.setState( { allNotes: curr, } );
    }

  }


  onDelete = ( id ) => {

    const list = this.state.allNotes;
    list.splice( id, 1 );
    this.setState( { allNotes: list } );

  }

  onDeleteAll = () => {
    const deleteAll = [];
    this.setState( { allNotes: deleteAll } );

  }

  onEdit = ( edited, id ) => {


    const list = this.state.allNotes;

    list.splice( id, id + 1, edited );
    this.setState( { allNotes: list } );

  }


  render() {

    return (
      <View style={styles.container} >

        <ImageBackground
          style={styles.img}
          resizeMode='cover'
          source={{ url: 'https://i.pinimg.com/736x/3d/1e/b8/3d1eb8843a0fb43f116fbfea9c28d6a5.jpg' }}
          blurRadius={5}
        >

          <CreateNotes onSubmit={this.onSubmit} style={{ zIndex: 1, }} onEdit={this.onEdit} onDelete={this.onDelete} onDeleteAll={this.onDeleteAll} allNotes={this.state.allNotes} />
          {/* <Notes onEdit={this.onEdit} onDelete={this.onDelete} onDeleteAll={this.onDeleteAll} allNotes={this.state.allNotes} /> */}


          <StatusBar style="auto" />
        </ImageBackground>

      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create( {
  container: {

    height: hp( '100%' ),
    flexWrap: 'nowrap',
    // backgroundColor: '#3d8c95',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    opacity: 1,
    marginTop: 0,
  },
  img: {
    backgroundColor: 'white',
    resizeMode: 'cover',
    width: wp( "100%" ),
    height: hp( "100%" ),
    flexDirection: 'column'
  }





} );
