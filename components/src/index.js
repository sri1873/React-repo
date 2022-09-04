import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App= ()=>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Skye" 
                    text ="Great blog!"
                    date="Today at 6:00PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Patalay" 
                    text ="Your good :)" 
                    date="Today at 9:00PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Mamtha" 
                    text ="Love It <3" 
                    date="Just Now"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));
