import React from 'react';
import Modal from './components/Modal';
import useModal from './hooks/useModal';

function App() {
  const [isOpenLoginModal, openLoginModal ,closeLoginModal ] = useModal();
  const [isOpenChatModal, openChatModal ,closeChatModal ] = useModal();

  return (
    <div>
      <button onClick={openLoginModal}>
        Open Login Modal
      </button>
      <button onClick={openChatModal}>
        Open Chat Modal
      </button>


      <Modal
        isOpen={isOpenLoginModal} 
        closeModal={closeLoginModal}
        title="Login"
      >
        <form>
          <input 
            type="email"
            placeholder="Correo"
          />
          <input 
            type="password"
            placeholder="Contraseña"
          />
        </form>
      </Modal>

      <Modal
        isOpen={isOpenChatModal} 
        closeModal={closeChatModal}
        title="Chat"
      >
        <p>Hola!!</p>
      </Modal>


    </div>
  );
}

export default App;
