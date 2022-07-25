import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
    const {item} = route.params
    return (
        <View style={styles.container}>
            <ImageBackground
                source={item.imageBig}
                style={styles.backgroundImage}
            >
                <TouchableOpacity 
                    style={styles.backIcon} 
                    onPress={() => navigation.goBack()}>
                    <Entypo 
                        name='chevron-left' 
                        size={32} 
                        color={colors.white}/>
                </TouchableOpacity>
                <View style={styles.titleWrapper} >
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationwrapper}>
                        <Entypo name='location-pin' size={24} color={colors.white} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name='heart' size={32} color={colors.green} />
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>

                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>R{item.price}</Text>
                            <Text style={styles.infoSubText}>/person</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between',
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25,
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60,
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
    itemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.white,
    },
    locationwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.white,
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal:20,
    },
    descriptionTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
    },
    descriptionText: {
        marginTop: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.darkGray,
        height: 85,
    },
});

export default Details;