import React, { useContext } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Col
} from 'reactstrap';
import './SingleCard.css'
import babySit from '../../../Images/images/babySit.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SingleCard = ({name , url}) => {
  const [user, setUser] = useContext(UserContext)

  const handleVolunteerType = (name,url) => {
    const userInfo = { ...user }
    userInfo.volunteerCatagory = name;
    userInfo.imageUrl=url;
    setUser(userInfo)
  }
  return (

    <Col md={3}>
      <Link to='/registration' onClick={() => handleVolunteerType(name,url)}>
        <Card>
          <CardImg
            style={{ height: '250px' }}
            top width="100%"
            src={url}
            alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </Col>

  );
};

export default SingleCard;