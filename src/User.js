import React from 'react';

function User ({user}) {
    // if (!user) return null;

    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Name</b>: {user.name}
            </div>
        </div>
    )
}

export default User;