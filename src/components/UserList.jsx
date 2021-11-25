import React, {useEffect, useMemo, useState} from 'react'

const UserList = (props) => {
  const [filter, setFilter] =useState(props.children)

  useEffect(()=>{
    setFilter(props.children)
  },[props.children])

const getSearch = () => {
  if(filter) {
    return filter
  }
  return props.chidren
}

const userSearch = getSearch();

    const onChange = (e) => {
      setFilter(props.children.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    return (
        <>
      {props.search &&<div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <textarea id="icon_prefix2" className="materialize-textarea" onChange={onChange}></textarea>

        </div>
      </div>}

<table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>E-mail</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
         {props.children && filter.map((user)=>
         <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <i className="material-icons"
            onClick={()=>props.deleteUser(user.id)}>delete</i>
          </tr>
           )}
        </tbody>
      </table>
        </>
    )
}

export default UserList;
