import React, { useState } from 'react'

const UseStateArray = () => {
    // Initial list of friends
    let myFriends = ['Montassir', 'Salah', 'Salma', 'Jalal'];

    // useState to manage the friends array
    const [friends, setFriends] = useState(myFriends);

    // Function to add a new friend to the list
    const addFriend = () => {
        setFriends([...friends, 'Youssef']); // Creates a new array with the previous friends + 'Youssef'
    };

    return (
        <div className='bg-red-400'> {/* Container with a red background using Tailwind CSS */}
            {friends.length > 0 ? (  // Checks if there are friends in the list
                friends.map((friend, i) => (  // Maps through the array and displays each friend
                    <div key={i}>
                        <p>{friend}</p>
                    </div>
                ))
            ) : ( 
                <div>You Have No Friends</div> // Message when there are no friends in the list
            )}

            {/* Button to add a new friend */}
            <button onClick={addFriend}>Add Friend</button>
        </div>
    );
};

export default UseStateArray;
