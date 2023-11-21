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
    backgroundColor: Colors.WHITE,
  },
  infoVeryLightContainer: {
    paddingVertical: 21,
    paddingHorizontal: 15,
    backgroundColor: Colors.VERY_LIGHT_VIOLET,
  },
  infoVeryLightTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoVeryLightTopLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoVeryLightTopRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoVeryLightMiddleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 14,
  },
  infoVeryLightMiddleLeftLine: {
    flex: 75,
    backgroundColor: '#FE4190',
    height: 10,
  },
  infoVeryLightMiddleRightLine: {
    flex: 25,
    backgroundColor: '#2DABAD',
    height: 10,
  },
  infoVeryLightBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  infoWhiteTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonContainer: {
    height: 40,
    borderRadius: 45,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
