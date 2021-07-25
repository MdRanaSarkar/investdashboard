import React from 'react'
import './protfolio.css'
import profile from '../imgs/easycselearn.png'
import {CalendarToday, LocationSearching, PermIdentity, PhoneAndroid,MailOutline} from '@material-ui/icons'
function Protfolio() {
    return (
        <div className="Protfolio">
            <div className="protfolioTitleContainer">
                <h1 className="title">Update Protfolio</h1>
            </div>
            <div className="protfolioContainer">
                <div className="protfolioShow">

                    <div className="protfolioShowTop">
                        <img src={profile} alt="profile" className="protfolioprofileImage">
                        </img>
                        <div className="protfolioTitle">
                          <span className="protfolioname">
                              Itzik Duek
                          </span>
                          <span className="protfolJobTitle"></span>
                            Software Engineer
                        </div>
                    </div>
                    <div className="protfolioUserShowButton">

                        <span className="protTitleShow">Account Details</span>
                        <div className="ShowUserInfo">
                            <PermIdentity className="userShowicon"/>
                            <span className="userNameTitle">Itzik Duek </span>

                        </div>
                        <div className="ShowUserInfo">
                            <CalendarToday className="userShowicon"/>
                            <span className="userNameTitle"> 25.07.2021 </span>

                        </div>
                        <span className="protTitleShow">Contact Details</span>
                        <div className="ShowUserInfo">
                            <PhoneAndroid className="userShowicon"/>
                            <span className="userNameTitle"> +1003433844 </span>

                        </div>
                        <div className="ShowUserInfo">
                            <MailOutline className="userShowicon"/>
                            <span className="userNameTitle"> itzik@gmail.com </span>

                        </div>
                        <div className="ShowUserInfo">
                            <LocationSearching className="userShowicon"/>
                            <span className="userNameTitle"> USA </span>

                        </div>


                    </div>

                </div>
                <div className="protfolioUpdate">
                    <span className="protUpdateTitle">Edit You Information</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>
                                    Username
                                </label>
                                <input type="text" placeholder="Username update" className="userNameupInput"></input>
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Email
                                </label>
                                <input type="email" placeholder="Update Email" className="userNameupInput"></input>
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Phone
                                </label>
                                <input type="number" placeholder="Update Phone" className="userNameupInput"></input>
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Location
                                </label>
                                <input type="text" placeholder="Update Location" className="userNameupInput"></input>
                            </div>
                            <button className="userupdatebutton">Update</button>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Protfolio
