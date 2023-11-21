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
  infoVioletContainer: {
    backgroundColor: Colors.THEME_VIOLET,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 16,
  },
  infoVioletTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoVioletTopLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoVioletTopRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoVioletBottomRow: {
    marginTop: 16,
  },
  infoVioletPriceRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoWhiteContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
