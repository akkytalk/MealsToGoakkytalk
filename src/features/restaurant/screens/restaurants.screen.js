import React, { useContext } from "react";

import { Searchbar } from "react-native-paper";
import { StyleSheet, FlatList, StatusBar } from "react-native";
import { RestautantInfoCard } from "../components/restuarant-info-card.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restuarants/restuarants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export function RestaurantsScreen() {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(`restaurants`, restaurants);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <Spacer position="bottom" size="large">
              <RestautantInfoCard restaurants={item} />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  search: { padding: 16 },
  list: { padding: 16, flex: 1, backgroundColor: "blue" },
});
