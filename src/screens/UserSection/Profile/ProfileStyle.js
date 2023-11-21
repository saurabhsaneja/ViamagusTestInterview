import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    padding: 17,
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
});
