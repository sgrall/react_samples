import * as React from 'react';

interface Props {
  userName : string;
  editingUserName: string;
  onEditingNameUpdated: (newEditingName : string) => void;
  onNameUpdateRequest: () => void;
}

export const NameEditComponent = (props : Props) => {
    return (
      <div>
        <label>Update name : </label>
        <input value = {props.editingUserName}
        onChange={(event : any) => props.onEditingNameUpdated(event.target.value)}/>
        <input type="submit" value="Change" className="btn btn-default" onClick={props.onNameUpdateRequest}
        disabled={props.editingUserName === '' || props.userName === props.editingUserName}/>
      </div>
    );
}
