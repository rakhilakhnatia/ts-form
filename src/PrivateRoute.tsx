import { AuthContext } from './features/authentication/Authentication'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children})
 {
	 {console.log("children",children)}
	const  {currentUser}  = useContext(AuthContext)
		
		if(currentUser == undefined  || currentUser == null) {
			
			return <Navigate to={'/'} replace />;
		}
		return children;
		
	
}

 