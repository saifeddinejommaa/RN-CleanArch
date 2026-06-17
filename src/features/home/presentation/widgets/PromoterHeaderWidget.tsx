import { StyleSheet, Text, View } from "react-native";
import { typography } from "../../../../theme/typography";
import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../app/store";
import { getPromoter } from "../../../profile/presentation/ProfileSlice";

const PromoterHeaderWidget = () => {
    const promoterState = useSelector((state:RootState) => state.promoter);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getPromoter());
    }, []);

    return (
        <View style={styles.container}>
            <Text style= {typography.label2XLarge}>Bonjour,</Text>
            <Text style= {typography.label2XLarge}>{promoterState.promoter.data?.firstName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 170,
    },
        
    });
export default PromoterHeaderWidget;