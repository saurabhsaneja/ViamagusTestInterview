import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    padding: 17,
    alignItems: 'center',
  },
  badgesContainer: {
    backgroundColor: Colors.VERY_LIGHT_VIOLET,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  badgeBox: {
    width: '98%',
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingLeft: 16,
    marginBottom: 16,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeRightBox: {
    marginLeft: 16,
    width: '75%',
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: '100%',
  },
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 60,
  },
  selectedTabView: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.THEME_VIOLET,
  },
  seperator: {
    backgroundColor: Colors.VERY_LIGHT_VIOLET,
    height: 4,
    width: '100%',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  underOverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '95%',
    alignSelf: 'center',
    borderColor: '#EEEAF3',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 34,
    marginBottom: 28,
  },
  changePercentRow: {
    flexDirection:'row',
    alignItems:'center'
  }
});
