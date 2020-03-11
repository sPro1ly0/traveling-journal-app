import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, 
  faSearch, 
  faPencilAlt, 
  faBookOpen, 
  faPlusCircle, 
  faGlobeAmericas, 
  faComments, 
  faCheck, 
  faTrash 
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
  library.add(
    faHome,
    faSearch, 
    faPencilAlt, 
    faBookOpen, 
    faGlobeAmericas, 
    faPlusCircle, 
    faBookOpen, 
    faComments,
    faCheck,
    faTrash
  );
}
