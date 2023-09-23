import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsVerify,
  selectUser,
  selectUserName,
  selectRefreshToken,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerify = useSelector(selectIsVerify);
  const user = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  const refreshToken = useSelector(selectRefreshToken);
  return {
    isLoggedIn,
    user,
    userName,
    isVerify,
    refreshToken,
  };
};
