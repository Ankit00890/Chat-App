import Users from "../models/UserModel.js"
export const getUsersForSidebar = async (req,res) =>{
    try {
    const loggedInUserId = req.user._id 

    const filteredUsers = await Users.find({_id: {$ne: loggedInUserId}}).select("-password")
res.status(200).json(filteredUsers)
    } catch (error){
        console.error("Error in getUsersForSider:", error.message)
      res.status(500).json({
        error: "Internal server error"
      }) 
    }
}