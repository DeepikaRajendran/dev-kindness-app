import React from 'react';
export default function Submission(){
    return (
        <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}


