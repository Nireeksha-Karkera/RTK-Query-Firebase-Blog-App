import styled from "styled-components"
import { useSelector, useDispatch} from "react-redux"
import {MdDeleteForever} from "react-icons/md"
import {removeUser} from "../store/slices/userSlice"


const DisplayUsers= () => {
    const dispatch = useDispatch()

    const data =useSelector((state) => {
        return state.users
    })

    // console.log(data)

    const deleteUser = (id) =>{
        dispatch(removeUser(id))

    }

    return <Wrapper>
        {
            data.map((user,id) => {
                return <li key = {id}>
                    {user}
                    <button className =" btn-delete" onClick={() => deleteUser(id)}>
                        <MdDeleteForever className = "delete-icon "/>
                    </button>
                </li>
            })
        }
        
    </Wrapper>
}
const Wrapper =styled.section`
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 1.5rem;
    color: #f12711;
    cursor: pointer;
  }
`

export default DisplayUsers