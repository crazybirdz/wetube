//Global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users

const USERS = "/users";
const ME = "/me";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password"; //"/change-password" -> 404 Error! Why!?

//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";
const VIDEO_DETAIL = "/:id";

// Github

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Facebook

const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  changePassword: CHANGE_PASSWORD,
  editProfile: EDIT_PROFILE,
  videos: VIDEOS,
  upload: UPLOAD,
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  deleteVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  me: ME,
  facebook: FB,
  facebookCallback: FB_CALLBACK,
};

export default routes;
