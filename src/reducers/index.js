let defaultState = {
    profileData :{}
}

const profileReducer = (state = defaultState, action) => {
    
    /* switch(action){
        case "profile success": return {
                ...state,
                profileData: action.profileData
        } 
        
    } */
    if (action.type === "profile_success") {
        return {
            ...state,
            profileData: action.data
        }
    } else {
        return {
            ...state,
        }
    }
}

export default profileReducer;