// import React, { useState } from 'react'

// const FormHandling = () => {
//     const [name, setName] = useState("");
//     const handleChange=(e)=>{
//         console.log(e)
//         let value = e.target.value
//         let name = e.target.name
//     setName(value)
//   }
//   return (
//     <div>
//         <input type="text" placeholder="Enter name" 
//             onChange={handleChange}
//             />
//             <h2>Hello, {name}</h2>
//     </div>
//   );
// }

// export default FormHandling

import React, { useState } from 'react'

const FormHandling = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    }


    return (
        <div>

            <h2>Form Handling Example</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                />


                <br />


                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                />


                <br />


                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                />


                <br />


                <button type="submit">
                    Submit
                </button>

            </form>


            <h3>
                Name: {formData.name}
            </h3>

            <h3>
                Email: {formData.email}
            </h3>

            <h3>
                Password: {formData.password}
            </h3>


        </div>
    )
}

export default FormHandling
