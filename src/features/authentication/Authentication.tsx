import React, { useEffect, useState } from 'react';
export const AuthContext = React.createContext( "Default Value")
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
export const AuthProvider = ({ children }) => {

	const [currentUser, setCurrentUser] = useState<unknown | null>(null);
	const [loading, setLoading] = useState(true);
	
	/** 
	 * signup function for authentication
	 *  */
	function signup(email:string, password:string) {
		return createUserWithEmailAndPassword(auth, email, password)
	}
	/** 
 * login function for authentication
 *  */
	function login(email :string, password :string) {
		return signInWithEmailAndPassword(auth, email, password)
	}
	/*
	 login function for authentication
	*  */
	   function logout() {
		   return signOut(auth)
	   }

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user =>
			setCurrentUser(user))
		setLoading(false)
		return unsubscribe
	}, [])

// s    //  type valueprop ={
	// 	 signup:(email:string,password:string)=>Promise<T>,
	// 	 login:(email:string,password:string)=>,
	// 	 currentUser:unknown,
	// 	 signup:(email:string,password:string)=>()

	//  }
	const value = { signup, login,currentUser,logout };
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	return (AuthContext)
}