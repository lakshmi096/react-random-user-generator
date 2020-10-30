import React, {useState} from 'react';
import { Card, CardBody, CardTitle, CardGroup, CardSubtitle } from 'reactstrap';
import { FaUser, FaMailBulk, FaCalendar, FaMapMarked, FaPhone, FaLock } from "react-icons/fa";
import {UserTitles} from "./en"

const UserCard = ({details}) => {
    console.log("details ", details)

    const [userItem, setUserItem] = useState({
        title: UserTitles.welcomeTitle,
        value: UserTitles.welcomeBody
    });

    const handleOnHover = (title, value) => {
        setUserItem({
            title,
            value
        })
    }

    const getFormattedDate = (date) => {
        const newDate = new Date(date).toString().split(' ');
        const newDateArray = (newDate.length > 4) ? [newDate[1],newDate[2],newDate[3]] : [];
        return newDateArray.join(' ').toString();
    }

    const getFormattedName = (name) => {
        let formattedName = (name.last) ? name.last: ""; 
        formattedName = (name.first) ? name.first + " " + formattedName : formattedName;
        return formattedName;
    }
    

    return(
        <Card className="card">
            <CardBody className="text-center">
                <img height="150" width="150" src={details.picture?.large}
                className="img-thumbnail rounded-circle border-danger" />
                <CardTitle className="card-text">
                    <CardSubtitle className="card-text__title">{userItem.title}</CardSubtitle>
                    <CardSubtitle className="card-text__value">{userItem.value}</CardSubtitle>
                </CardTitle>
                <CardGroup className="card-icons">
                    <FaUser className="icon" size="2em" onMouseOver={() => handleOnHover(UserTitles.name, getFormattedName(details.name))} />
                    <FaMailBulk className="icon"  size="2em" onMouseOver={() => handleOnHover(UserTitles.email, `${details.email}`)} />
                    <FaCalendar className="icon"  size="2em" onMouseOver={() => handleOnHover(UserTitles.birthday, getFormattedDate(details.dob.date))} />
                    <FaMapMarked className="icon"  size="2em" onMouseOver={() => handleOnHover(UserTitles.address, `${details.location.city}`)} />
                    <FaPhone className="icon"  size="2em" onMouseOver={() => handleOnHover(UserTitles.phone, `${details.phone}`)} />
                    <FaLock className="icon"  size="2em" onMouseOver={() => handleOnHover(UserTitles.password, `${details.login.password}`)} />
                </CardGroup>
            </CardBody>
        </Card>
    )
}

export default UserCard;