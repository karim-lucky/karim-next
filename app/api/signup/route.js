import { User } from "@/models/user";
import { NextResponse } from "next/server";




export async function DELETE(req){

    console.log(req.nextUrl.searchParams.get("d"))

    let id=req.nextUrl.searchParams.get("d");
    console.log(id);
    await User.findByIdAndDelete(id)

    return NextResponse.json({
        success:true
    })

}

export async function GET(req){
    try{
     
        let myUsers=await User.find();

        return NextResponse.json({users:myUsers})


    }catch(err){
      console.log(err)
    }
}

export async function PUT(req){

   let data= await req.json();
  
   
   await User.findByIdAndUpdate(data._id,data)

    return NextResponse.json({
        success:true
    })
}


export async function POST(req) {

    try {

        // to get the data
        let data = await req.json();
        console.log(data)

        let newUser = new User(data);

        console.log(newUser)
        await newUser.save();
        return NextResponse.json({
            srccess: true
        })

    } catch (error) {
        console.error('Error during user creation:', error.message);
        return NextResponse.json({
            success: false,
            message: 'Failed to create user',
            error: error.message,
        } );
    }




}

// import { User } from "@/models/user";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//     try {
//         // Log start of the request
//         console.log("Starting POST request to /api/signup");

//         // Get the data from the request
//         let data = await req.json();
//         console.log("Received data:", data);

//         // Create a new user instance with the data
//         let newUser = new User(data);
//         console.log("Created new user instance");

//         // Save the new user to the database
//         await newUser.save();
//         console.log("User saved to database");

//         // Return a successful response
//         return NextResponse.json({
//             success: true,
//             message: 'User created successfully',
//         });
//     } catch (error) {
//         console.error('Error during user creation:', error.message);
//         return NextResponse.json({
//             success: false,
//             message: 'Failed to create user',
//             error: error.message,
//         }, { status: 500 });
//     }
// }
