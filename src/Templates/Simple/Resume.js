import React, {useContext} from 'react';
import {
    PDFViewer,
    Document,
    Page,
    StyleSheet,
    View,
    Font
} from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact'
import Profile from './Profile'
import OpenSans from "assets/fonts/OpenSans-Light.ttf"
import OpenSansBold from "assets/fonts/OpenSans-Bold.ttf"
import OpenSansRegular from "assets/fonts/OpenSans-Bold.ttf"
import { UserStateContext } from 'context/user';
import { ExperienceStateContext } from 'context/experience';
import { SkillStateContext } from 'context/skill';
import { EducationStateContext } from 'context/education'




Font.register({ family: "OpenSans", fonts: [
    { src: OpenSans },
    { src: OpenSansRegular, fontWeight: 500 },
	{ src: OpenSansBold, fontWeight: 700 },
  ]})
  

const styles = StyleSheet.create({
    document: {
        width: '100%',
        height: '100vh',
    },
    page: {
        padding: 30,
        width: '100%',
        height: '100vh',
        fontFamily: 'OpenSans'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: 'column',
        width: '30%',
        paddingTop: 30,
        paddingRight: 15,
    },
    rightColumn: {
        flexDirection: 'column',
        width: '60%',
        paddingTop: 30,
        paddingRight: 15,
    },
    footer: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 25,
        paddingTop: 10,
        borderWidth: 3,
        borderColor: 'gray',
        borderStyle: 'dashed',
        '@media orientation: landscape': {
        marginTop: 10,
        },
    },
});


const Resume = () => {
    const userState = useContext(UserStateContext)
    const experienceState = useContext(ExperienceStateContext)
    const skillState = useContext(SkillStateContext)
    const educationState = useContext(EducationStateContext)
    const name = ( userState.first_name || userState.last_name ) ? userState.first_name + ' ' + userState.last_name : ''

    return (
        <PDFViewer style={styles.document}>
            <Document style={styles.document}>
                <Page size="A4" style={styles.page}>
                    <Header 
                        name={name || undefined}
                        role={userState.title || undefined}
                    />
                    <View style={styles.container}>
                        <View style={styles.leftColumn}>
                            <Contact
                                email={userState.email || undefined}
                                phone={userState.phone || undefined}
                            />
                            {educationState.length > 0 && <Education education={educationState}/>}
                            {skillState.length > 0 && <Skills skills={skillState}/>}
                        </View>
                        <View style={styles.rightColumn}>
                            <Profile
                                profile={userState.profile || undefined}
                            />
                            {experienceState.length > 0 && <Experience experience={experienceState}/>}
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}


export default Resume