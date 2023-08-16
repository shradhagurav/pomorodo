import { signOut } from "next-auth/react";
import React from "react";

function About() {
	return (
		<div className=" mx-auto mt-36 text-white  p-5 float-left">
			
			<button onClick={()=>signOut("google")} className='bg-red-500 rounded px-2 py-1 mb-10 hover:bg-red-700'>Logout</button>
		</div>
	);
}

export default React.memo(About);