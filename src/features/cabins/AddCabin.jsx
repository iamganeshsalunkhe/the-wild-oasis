import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
  
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//     return (
//       <div>
//         <Button
//           variation="primary"
//           onClick={() => setIsOpenModal((show) => !show)}
//         >
//           Add new cabin
//         </Button>
//         {isOpenModal && (
//           <Modal onClose={() => setIsOpenModal(false)}>
//             <CreateCabinForm onCloseModel={() => setIsOpenModal(false)}/>
//           </Modal>
//         )}
//       </div>
//     );
// }

export default AddCabin;
