import { getCookie, setCookie, deleteCookie } from 'utils'

const host = process.env.REACT_APP_API_HOST


const tokenFetch = async (path, method, payload) => {
    const cookie = getCookie('mallar')
    const response = await fetch(`${host}${path}`, {
        method: method,
        headers: {
            Authorization: `Bearer ${cookie.token}`
        },
        body: payload ? JSON.stringify(payload) : null
    })
    if (response.status <= 400){
        return await response.json()
    }else if (response.status === 401){
        deleteCookie('mallar')
    }
}

const registerUser = async (email, password) => {
    await fetch(`${host}/user/register`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
}

const loginUser = async (username, password) => {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await fetch(`${host}/token`, {
        method: 'POST',
        body: formData
    })

    if (response.status===200){
        const data = await response.json()
        setCookie('mallar', { token: data.access_token }, 30)
        return true
    }

    return false
}

const fetchCvs = async () => {
    return await tokenFetch(
        `/cv`,
        'GET'
    )
}

const fetchCvData = async (CvId) => {
    return await tokenFetch(
        `/cv/${CvId}`,
        'GET'
    )
}

const createCv = async () => {
    return await tokenFetch(
        `/cv`,
        'POST'
    )
}

const updateCV = async (cvInfo) => {
    return await tokenFetch(
        `/cv`,
        'PATCH',
        cvInfo
    )
}

const createEducation = async (cvId) => {
    return await tokenFetch(
        `/education`,
        'POST',
        { cv_id: cvId }
    )
}

const createExperience = async (cvId) => {
    return await tokenFetch(
        `/experience`,
        'POST',
        { cv_id: cvId }
    )
}

const addSkill = async (cvId, skill) => {
    console.log(skill)
    console.log(cvId)
    return await tokenFetch(
        `/skill`,
        'POST',
        { cv_id: cvId, skill }
    )
}

const updateEducation = async (educationInfo) => {
    return await tokenFetch(
        `/education`,
        'PATCH',
        educationInfo
    )
}

const updateExperience = async (experience) => {
    return await tokenFetch(
        `/experience`,
        'PATCH',
        experience
    )
}

const deleteEducation = async (education_id) => {
    return await tokenFetch(
        `/education/${education_id}`,
        'DELETE'
    )
}

const deleteExperience = async (experience_id) => {
    return await tokenFetch(
        `/experience/${experience_id}`,
        'DELETE'
    )
}

const deleteSkill = async (cvId, skill) => {
    return await tokenFetch(
        `/experience/${cvId}`,
        'DELETE',
        {skill}
    )
}

export { 
    loginUser,
    fetchCvs,
    createCv,
    fetchCvData,
    updateCV,
    createEducation,
    updateEducation,
    deleteEducation,
    createExperience,
    updateExperience,
    deleteExperience,
    addSkill,
    deleteSkill,
    registerUser
}