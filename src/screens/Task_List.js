import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text, ImageBackground} from "react-native" //import do css, view e text

import moment from "moment"
import "moment/locale/pt-br"

import today_Image from "../../assets/imgs/today.jpg"

import Task from "./components/Task"

// cria uma classe padrão que será usada em outras partes do programa
export default class TaskList extends Component{ // tem todas as características de um componente (herança)
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMM')
        return(
            <View style ={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <view style={styles.titleBar}>
                        <text style={styles.title}>Hoje</text>
                        <text style={styles.subTitle}>{today}</text>
                    </view>
                </ImageBackground>
                <View style={styles.taskList}>
                        <task/>
                        <task/>
                        <task/>
                        {/*  */}
                </View>
            </View>
        )
    }
} 

//esquema de css
const styles = StylesSheet.create({ //variável q guarda os estilos
    container: {
        flex: 1
    },
    backgroud:{
        flex: 3
    },
    taskList:{
        flex: 7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'fkex-end'
    },
    title:{
        fontFamily:'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    }

})