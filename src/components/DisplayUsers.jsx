import {useSelector} from "react-redux"; 
import styled from "styled-components";
import {MdDeleteForever} from "react-icons/all.js";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";


const DisplayUsers = () => {
const dispatch = useDispatch();
const data = useSelector((state) => {
return state.users;
})

console.log(data)

const deleteUser = (id) =>{
    dispatch(removeUser(id))
}

return <Wrapper>
{
    data.map((user, id)=>{
        return <li key={id}>
            <span>{user}</span>
            <button className="btn-delete" onClick={() => deleteUser(id)}>
                <MdDeleteForever className="delete-icon"/>
            </button>
        </li>
    })
}
</Wrapper>
};

const Wrapper = styled.section`
ul li{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li{display: flex;
    justify-content: space-between;
    margin-bottom: 10px;}
    button.btn-delete{display: flex;
        float: right;
        margin-top: 10px;}
`;



export default DisplayUsers;