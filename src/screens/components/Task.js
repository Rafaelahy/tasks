import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text} from "react-native" //import do css, view e text

import moment from "moment"
import "moment/locale/pt-br"

export default props =>{
    return (
        <view style={Styles.container}>
            <text style={styles.desc}>Descrição da tarefa</text>
            <text style={styles.date}>Data estimada conclusão</text>
            <text style={styles.date}>Data conclusão</text>
        </view>
    )
}
const styles = styleSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottonWidth: 1,
        alignItems:'center',
        paddingVertical: 10
    },
    desc:{
        fontFamily: 'Arial',
        fontsize: 20
    },
    date:{
        fontFamily: 'Arial'
    }
})