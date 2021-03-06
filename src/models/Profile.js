module.exports = (sequelize, Sequelize) =>{
    const Profile = sequelize.define("Profile",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        image:{
            type:Sequelize.BLOB
        }
    },
    {
        freezeTableName:true,
        tablename: "Profile",
        timestamps: false
    })
    return Profile
}