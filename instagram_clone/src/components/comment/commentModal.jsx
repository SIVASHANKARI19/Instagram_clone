import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { BsThreeDots, BsEmojiSmile } from 'react-icons/bs';
import CommentCard from './CommentCard';

const CommentModal = ({ postImage, userImage }) => {
  const [open, setOpen] = React.useState(false);

  const comments = [
    { 
      id: 1, 
      username: "user1", 
      comment: "Great shot! 📸", 
      userImage: "https://media.istockphoto.com/id/858282646/photo/cat-in-a-pod.webp?b=1&s=612x612&w=0&k=20&c=L6c2iIV0cRSCehm70XDoLJZeRE-gqO15gsSpl0hqqB0=" 
    },
    { 
      id: 2, 
      username: "user2", 
      comment: "Amazing! 🔥", 
      userImage: "https://media.istockphoto.com/id/858282646/photo/cat-in-a-pod.webp?b=1&s=612x612&w=0&k=20&c=L6c2iIV0cRSCehm70XDoLJZeRE-gqO15gsSpl0hqqB0=" 
    },
    { 
      id: 3, 
      username: "user3", 
      comment: "Love this perspective", 
      userImage: "https://media.istockphoto.com/id/858282646/photo/cat-in-a-pod.webp?b=1&s=612x612&w=0&k=20&c=L6c2iIV0cRSCehm70XDoLJZeRE-gqO15gsSpl0hqqB0=" 
    },
  ];

  return (
    <React.Fragment>
      <p 
        className="opacity-50 py-2 cursor-pointer hover:opacity-100"
        onClick={() => setOpen(true)}
      >
        View all 10 comments
      </p>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: '90%',
            maxWidth: '1000px',
            borderRadius: 'md',
            p: 0,
            boxShadow: 'lg',
            height: '90vh',
            maxHeight: '700px',
            bgcolor: 'background.body'
          }}
        >
          <ModalClose
            variant="plain"
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 1000
            }}
          />
          
          <div className="flex h-full">
            {/* Left side - Image */}
            <div className="w-[45%] bg-black flex items-center">
              <img
                src={postImage}
                alt="Post"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right side - Comments */}
            <div className="w-[55%] flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  <img 
                    className="w-8 h-8 rounded-full" 
                    src={userImage} 
                    alt="User" 
                  />
                  <span className="ml-3 font-semibold">Username</span>
                </div>
                <BsThreeDots className="cursor-pointer" />
              </div>

              {/* Comments section */}
              <div className="flex-1 overflow-y-auto px-4">
                {comments.map((comment) => (
                  <CommentCard 
                    key={comment.id}
                    username={comment.username}
                    comment={comment.comment}
                    userImage={comment.userImage}
                  />
                ))}
              </div>

              {/* Comment input */}
              <div className="border-t p-4">
                <div className="flex items-center">
                  <BsEmojiSmile className="text-xl mr-3" />
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default CommentModal;