import * as actionTypes from '../actions';

const initialState = {
  initialSetup: true,
  userData: {
    image: '',
    firstname: '',
    lastname: '',
    phone: '',
    aboutMyself: '',
    favoriteAvenger: ''
  },
  defaultImage: 'https://www.pngkit.com/png/detail/126-1262807_instagram-default-profile-picture-png.png'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER:
      return {
        ...state,
        initialSetup: false,
        userData: {
          ...state.userData,
          ...action.userData
        }
      }
    default:
      break;
  }
  return state;
};

export default reducer;