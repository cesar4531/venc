import { StyleSheet } from "react-native";
export default function News(){
    return(
        <>
            <h1>hello world</h1>
            <button style={style.buttonC} onClick={()=>alert('hello world')}>click me!</button>
        </>
    );
}

const style = StyleSheet.create({
    buttonC:{
        borderRadius:10,
        backgroundColor:'#b8b365',
        color:'#fff',
        position: 'relative',
        width:300,
        height:30,
        
    }
    
})