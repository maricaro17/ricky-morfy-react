import React, {Component} from "react";
import { Card } from "react-bootstrap";

export default class Cards extends Component {
   
render () {
    const {image,name,species}=this.props.personajes

    return(

        <div>
            <Card className="my-3 mx-3 bg-dark text-white" style={{ width: '18rem', color: 'black' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text>
                            {species}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>

    )
}

}