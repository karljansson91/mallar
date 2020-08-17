import React from 'react';
import PropTypes from 'prop-types';

import {
    PDFViewer,
    Document,
    Page,
    StyleSheet,
    View,
} from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const styles = StyleSheet.create({
    document: {
        width: '100%',
        height: '100vh'
    },
    page: {
        padding: 30,
        width: '100%',
        height: '100vh'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        '@media max-width: 400': {
        flexDirection: 'column',
        },
    },
    image: {
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: 'column',
        width: 170,
        paddingTop: 30,
        paddingRight: 15,
        '@media max-width: 400': {
        width: '100%',
        paddingRight: 0,
        },
        '@media orientation: landscape': {
        width: 200,
        },
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


const Resume = ({name, email, education, skills, experience}) => (
    <PDFViewer style={styles.document}>
        <Document>
            <Page size="A4" style={styles.page}>
                <Header 
                    name={name}
                    email={email}
                />
                <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Education education={education}/>
                    <Skills skills={skills}/>
                </View>
                <Experience experience={experience}/>
                </View>
            </Page>
        </Document>
    </PDFViewer>
)

Resume.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    education: PropTypes.arrayOf(PropTypes.object),
    skills: PropTypes.arrayOf(PropTypes.object),
    experience: PropTypes.arrayOf(PropTypes.object)
};

Resume.defaultProps = {
    name: 'Karl',
    email: 'Jansson',
    education: [{
        school: 'Solbergagymnasiet',
        degree: 'Natur',
        start: 'Q1 2000',
        end: 'Q2 2005'
    },
    {
        school: 'Lunds tekniska unversitet',
        degree: 'Master Datateknik',
        start: 'Q1 2005',
        end: 'Q2 2011'
    }],
    skills: [{
        title: 'Programmering',
        skills: ['Javscript', 'Python']
    },
    {
        title: 'Språk',
        skills: ['Engelska', 'Svenska']
    }],
    experience: [{
        position: 'Kundtjänst',
        company: 'Aspiranterna',
        date: 'Q1 2000 - Q2 2005',
        details: [
            'Problemlösning och kundkontakt var två ledord för min roll på Aspiranterna.', 
            'Jag lärde mig det interna butikssystemet utantill och fick en bred förståelse för företagets produkter.'
        ]
    },
    {
        position: 'HR assistent',
        company: 'Spotify',
        date: 'Q3 2011 - Q2 2015',
        details: [
            'Ett administrativt jobb som utvecklades till att jag fick ansvar för både lönesättning och personalsamtal.', 
            'Jag lärde mig hur man ska handskas med personer och att det alltid finns fler infallsvinklar som måste analyseras för att lösa ett problem.'
        ]
    }]
};

export default Resume