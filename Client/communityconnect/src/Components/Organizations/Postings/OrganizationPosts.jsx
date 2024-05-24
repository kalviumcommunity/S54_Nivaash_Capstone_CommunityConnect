import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';
import PostNavbar from './PostNavbar.jsx'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import './post.css'
import ProfileAvatar from '../../Assets/Avatar.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OrganizationPosts = () => {
    const [posts, setPosts] = useState([]);
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [toggleComments, setToggleComments] = useState(false); // Define toggleComments state
    const [commentInput, setCommentInput] = useState('');   

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://communityserver.vercel.app/post');
                setPosts(response.data);
            } catch (error) {                           
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const handleCommentSubmit = async (postId) => {
        if (!commentInput.trim()) {
            toast.dark('Please type something before submitting.');
            return; 
        }
        
        try {
            await axios.put(`https://communityserver.vercel.app/post/${postId}/comment`, {
                comment: commentInput
            });
            const updatedPosts = posts.map(post => {
                if (post._id === postId) {
                    return {
                        ...post,
                        comments: [...post.comments, commentInput]
                    };
                }
                return post;
            });
            setPosts(updatedPosts);
            toast.success('Commented Successfully');
            setCommentInput('');
        } catch (error) {
            console.error('Error adding comment:', error);
            toast.error('Error Commenting');
        }
    };
    
    

    const handleCommentInputChange = (e) => {
        setCommentInput(e.target.value);
    };
    

    const handleCreatePostClick = () => {
        setShowCreatePost(true); 
        
    };

    const handleToggleComments = () => {
        setToggleComments(!toggleComments);
    };

    


    return (
        <div className='h-screen w-screen'>
            <PostNavbar />
            <div className="flex flex-row justify-evenly mt-7 text-gray-800 space-x-8">

                <div className="istok-web-regular h-full  bg-[#2B2D42] text-black shadow-lg rounded-3xl p-4 space-y-8 ">
                    <label className="input input-bordered flex items-center gap-2 bg-white text-black mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" className="w-4 h-4 ">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                        <input type="text" className="grow" placeholder="Search People" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 cursor-pointer">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </label>

                    <h2 style={{ fontFamily: "itim" }} className="font-bold text-2xl text-white ">Following</h2>
                    <ul className="mt-4 mr-8 space-y-5">
                        <li className="flex items-center justify-evenly space-x-2 p-2  cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-[#ffc200] ring-offset-base-100 ring-offset-2">
                                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Avatar" />
                                </div>
                            </div>
                            <span className="text-md text-white">Green World</span>
                            <span className="text-red-500 ml-auto">♥</span>
                        </li>
                        <li className="flex items-center justify-evenly space-x-2 p-2  cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-[#ffc200] ring-offset-base-100 ring-offset-2">
                                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Avatar" />
                                </div>
                            </div>
                            <span className="text-md text-white">Rainbow Youth</span>
                            <span className="text-red-500 ml-auto">♥</span>
                        </li>
                    </ul>

                    <h2 style={{ fontFamily: "itim" }} className="font-bold text-2xl text-white">Community</h2>
                    <ul className="mt-4 mr-8 space-y-5">
                        <li className="flex items-center justify-evenly space-x-2 p-2  cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-[#ffc200] ring-offset-base-100 ring-offset-2">
                                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Avatar" />
                                </div>
                            </div>
                            <span className="text-md text-white">Green World</span>
                            <span className="text-red-500 ml-auto">♥</span>
                        </li>
                        <li className="flex items-center justify-evenly space-x-2 p-2  cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-[#ffc200] ring-offset-base-100 ring-offset-2">
                                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Avatar" />
                                </div>
                            </div>
                            <span className="text-md text-white">Rainbow Youth</span>
                            <span className="text-red-500 ml-auto">♥</span>
                        </li>

                    </ul>
                </div>
 
                <div style={{ maxHeight: "80vh" }} className="w-3/6 p-4 overflow-y-auto">
                    {posts.map(post => (
                        <div key={post._id} className="bg-[#a3b2cc] p-4 rounded-lg shadow mb-4 space-y-7">
                            {/* Post content */}
                            <div className="flex">
                                <div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={ProfileAvatar} />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-evenly'>
                                    <h3 className="istok-web-regular text-black px-4 text-sm">{post.OrganisationName}</h3>
                                    <div className='flex space-x-1 px-4 items-center'>
                                        <FmdGoodOutlinedIcon style={{ height: "18px", width: "18px" }} />
                                        <p className="text-sm text-black">{post.Location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center' >
                                <img src={post.EventImage} alt="Event" className="border-4 rounded-lg bg-white border-[#2b2c43] my-2 h-80 w-11/12 object-contain" />
                            </div>
                            <div>
                                <h1 className='text-start text-xl indent-5 '>Description</h1>
                                <p className=' text-start text-md pl-10 mt-3 ' >{post.Description}</p>
                            </div>
                            <div className='text-start indent-5'>
                                <p>Event starts on: <span className="font-medium text-gray-800">{new Date(post.startDate).toLocaleDateString('en-GB')}</span></p>
                                <p>Event ends on: <span className="font-medium text-gray-800">{new Date(post.endDate).toLocaleDateString('en-GB')}</span></p>
                            </div>
                            {/* Comment input */}
                            <div className="flex mt-4 items-center">
                                <div className="chat chat-start flex items-center">
                                    <ChatOutlinedIcon style={{ width: "24px", height: "24px" }} />
                                    <input
                                        placeholder='Write your Comment.....'
                                        className="chat-bubble chat-start px-20 bg-[#2b2c43] text-white"
                                        value={commentInput}
                                        onChange={handleCommentInputChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleCommentSubmit(post._id);
                                            }
                                        }}
                                    />
                                    <button
                                        onClick={() => handleCommentSubmit(post._id)}
                                        className="bg-[#2b2c43] text-white py-1 px-3 rounded-lg ml-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                            {/* Display comments */}
                            <div className="collapse bg-base-200">
                                <input type="checkbox" id={`toggle-comments-${post._id}`} className="peer" />
                                <div className="collapse-title bg-[#2b2c43] text-white peer-checked:bg-[#2b2c43] peer-checked:text-white">
                                    <label htmlFor={`toggle-comments-${post._id}`} className="cursor-pointer" onClick={handleToggleComments}>{toggleComments ? 'Close Comments' : 'View Comments'}</label>
                                </div>
                                <div className="collapse-content bg-[#2b2c43] text-primary-content peer-checked:bg-[#2b2c43] peer-checked:text-secondary-content" style={{ overflowY: 'auto' }}>
                                    <div className="flex flex-col space-y-4 mt-3" style={{maxHeight: '220px'}} >
                                    {post.comments.map((comment, commentIndex) => (
                                        <div key={commentIndex} className="flex items-center space-x-4">
                                            <div className="avatar" style={{ alignSelf: 'flex-start' }}>
                                                <div className="w-8 rounded-full ring ring-[#ffc200] ring-offset-base-100 ring-offset-2">
                                                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Avatar" />
                                                </div>
                                            </div>
                                            <div className={`chat-bubble chat-end bg-[#a3b2cc] text-black`} style={{ padding: '0.5rem', maxWidth: '70%' }}>
                                                {comment}
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="w-1/6 h-4/5 flex flex-col items-center bg-[#2b2c43] shadow-lg rounded-2xl py-10 space-y-8 ">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-[#ffc200] ring-offset-base-100 ring-offset-2">
                            <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Avatar" />
                        </div>
                    </div>
                    <h1 className="text-center text-2xl mt-2 text-white ">Go Green</h1>
                    <div className='flex justify-evenly istok-web-regular w-full' >
                        <div >
                            <p className="text-center text-2xl text-white">60</p>
                            <p className="text-center text-xl text-[#FABB05]">Posts</p>
                        </div>
                        <div>
                            <p className="text-center text-2xl text-white">512</p>
                            <p className="text-center text-xl text-[#34A853]">Followers</p>
                        </div>
                    </div>
                    {showCreatePost && <CreatePost onCreatePost={() => setShowCreatePost(false)} />} {/* Display the CreatePost component if showCreatePost is true */}
                    <CreatePost/>
                </div>
            </div>
            
        </div>
    );
};

export default OrganizationPosts;
