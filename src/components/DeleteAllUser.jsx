import styled from "styled-components";
import { clearAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux"

const DeleteAllUser = () => {
    const dispatch = useDispatch();

    const deleteUsers = () => {
        console.log("hi")
        dispatch(clearAllUsers())
    }

    return <Wrapper>
    
        <button className="btn clear-btn" onClick={deleteUsers}>Clear Users</button>
  
    </Wrapper>
};

const Wrapper = styled.section`
    button.clear-btn{display: flex;
        float: right;
        margin-top: 10px;}
`;

export default DeleteAllUser;