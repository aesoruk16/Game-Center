import mobx, {
  observable,
  action,
  computed,
  makeAutoObservable,
  toJS,
  makeObservable,
} from 'mobx';
import _ from 'lodash';

class BaseVariables {
  constructor() {
    makeAutoObservable(this);
  }
  @observable modalVisible = false;
  @observable isLoading = false;
  @observable platformPickerModal = true;
  @observable selectedPlatform = '';



  @observable sortBy = '';

  
  @observable gameList = [];
  @observable gameListAll = [];

  @observable categoryList = [];
  @observable selectedCategory = '';

  @observable modalData = {
    title: '',
    content: '',
    confirm: null,
  };

  @action('sortBy Change')
  sortByChange(val) {
    this.sortBy = val;
  }
  @action('modalData Change')
  modalDataChange(val) {
    this.modalData = val;
  }

  @action('gameList Change')
  gameListChange(val) {
    this.gameList = val;
    this.gameListAll = val;
    this.categoryList = _.keys(_.groupBy(val, 'genre'));

    // console.log(this.categoryList);
  }
  @action('selectedPlatform Change')
  selectedPlatformChange(val) {
    this.selectedPlatform = val;
  }

  @action('selectedCategory Change')
  selectedCategoryChange(val) {
    this.selectedCategory = val;
    this.gameList = _.filter(this.gameListAll, item => item.genre == val);
  }

  @action('platformPickerModal Change')
  platformPickerModalChange(val) {
    this.platformPickerModal = val;
  }
  @action('isLoading Change')
  isLoadingChange(val) {
    this.isLoading = val;
  }
  @action('modalVisible Change')
  modalVisibleChange(val) {
    this.modalVisible = val;
  }

  @computed get getModalData() {
    return toJS(this.modalData);
  }
  @computed get getGameList() {
    return toJS(this.gameList);
  }
  @computed get getCategory() {
    return toJS(this.categoryList);
  }
}
const baseVariables = new BaseVariables();
export default baseVariables;
