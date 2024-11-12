import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6"

const styles = StyleSheet.create ({
    Mother: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: 'whitesmoke',
        margin: 10
    },
    Title: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'serif',
        marginTop: 40,
        fontSize: 25,
        marginBottom: 20
    },
    Child: {
        borderWidth: 2,
        textAlign: 'center',
        margin: 5
    },
    Boatname: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'serif'
    }
})

const Boat = ({title, description, icon_name, poster}) => {
    return (
        <View style={styles.Child}>
            <Text style={styles.Boatname}>{title}</Text>
            <View style={{flexDirection: 'row'}}>
                <Icon name={icon_name} size={20} color="red"/>
                <Text style={{ fontFamily:'serif'}}>{description}</Text>
            </View>
            <Image style={{width:365, height:245, alignItems: 'center'}} source={poster} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView>
            <View style={styles.Mother}>
                <Text style={styles.Title}>GetABoat - For Sale</Text>
                <Boat
                    icon_name="sailboat"
                    title="Sea Ray 500 SUNDANCER"
                    description= "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    poster={require('../img/sea_ray.jpg')}
                />

                <Boat
                    icon_name="sailboat"
                    title="FOUR WINNS HORIZON 180"
                    description= "A sporty look and refined details truly set the Horizon 180 above all others."
                    poster={require('../img/four_winns.jpg')}
                />

                <Boat
                    icon_name="sailboat"
                    title="FLIPPER 640 ST"
                    description= "A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    poster={require('../img/flipper.jpg')}
                />

                <Boat
                    icon_name="sailboat"
                    title="Princess V48"
                    description= "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    poster={require('../img/princess.jpg')}
                />

                <Boat
                    icon_name="sailboat"
                    title="BAYLINER 175 BOWRIDER"
                    description= "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    poster={require('../img/bayliner.jpg')}
                />

                <Boat
                    icon_name="sailboat"
                    title="FAIRLINE TARGA 47"
                    description= "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    poster={require('../img/fairline.jpg')}
                />
            </View>
        </ScrollView>
    );
};

export default AllBoats;
