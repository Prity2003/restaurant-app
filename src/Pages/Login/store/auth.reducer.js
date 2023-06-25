import { authTypes } from './auth.type';
const initialState = {
    // isAuthenticated:
    //     typeof window !== 'undefined' ? (localStorage.getItem('token') ? true : false) : false,
    user: null,
    emailVerifiedUser: null,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case authTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isEmailVerified: false,
                emailVerifiedUser: null,
                user: payload,
                userId: payload._id,
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isEmailVerified: false,
                emailVerifiedUser: null,
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        case authTypes.EMAIL_VERIFIED:
            return {
                ...state,
                isEmailVerified: true,
                emailVerifiedUser: payload,
            };
        case authTypes.USER_NOT_LOADED:
            return {
                ...state,
                isAuthenticated: false,
            };

        case authTypes.ADD_REMOVE_FAVID:
            let updatedUserFavourite = { ...state.user };
            if (payload.type === 0) {
                if (
                    'favoriteAudios' in updatedUserFavourite &&
                    Array.isArray(updatedUserFavourite.favoriteAudios)
                ) {
                    updatedUserFavourite.favoriteAudios = updatedUserFavourite.favoriteAudios.filter(
                        (id) => id !== payload.id
                    );
                } else {
                    updatedUserFavourite.favoriteAudios = [];
                }
            } else if (payload.type === 1) {
                if (
                    'favoriteAudios' in updatedUserFavourite &&
                    Array.isArray(updatedUserFavourite.favoriteAudios)
                ) {
                    updatedUserFavourite.favoriteAudios = [
                        ...updatedUserFavourite.favoriteAudios,
                        payload.id,
                    ];
                } else {
                    updatedUserFavourite.favoriteAudios = [payload.id];
                }
            }
            return {
                ...state,
                user: updatedUserFavourite,
            };

        case authTypes.ADD_REMOVE_SFX_FAVID:
            let updatedUserFavSFx = { ...state.user };
            if (payload.type === 0) {
                if (
                    'favoriteSfx' in updatedUserFavSFx &&
                    Array.isArray(updatedUserFavSFx.favoriteSfx)
                ) {
                    updatedUserFavSFx.favoriteSfx = updatedUserFavSFx.favoriteSfx.filter(
                        (id) => id !== payload.id
                    );
                } else {
                    updatedUserFavSFx.favoriteSfx = [];
                }
            } else if (payload.type === 1) {
                if (
                    'favoriteSfx' in updatedUserFavSFx &&
                    Array.isArray(updatedUserFavSFx.favoriteSfx)
                ) {
                    updatedUserFavSFx.favoriteSfx = [...updatedUserFavSFx.favoriteSfx, payload.id];
                } else {
                    updatedUserFavSFx.favoriteSfx = [payload.id];
                }
            }

            return {
                ...state,
                user: updatedUserFavSFx,
            };

        default:
            return state;
    }
}
