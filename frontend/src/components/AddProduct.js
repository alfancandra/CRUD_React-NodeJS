import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useNavigate();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title: title,
            price: price
        });
        history("/");
    }
 
    return (
        <div>
            <h1 class="title">Tambah Data</h1>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct