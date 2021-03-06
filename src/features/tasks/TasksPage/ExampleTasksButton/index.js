import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonsBox, Button } from "../../styledButtons";
import {
  fetchExampleTasksLoading,
  selectIsExampleTaskLoading,
  selectIsOutOfExamples,
  selectIsExampleTaskError,
} from "../tasksSlice";

export const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsExampleTaskLoading);
  const outOfExamples = useSelector(selectIsOutOfExamples);

  return (
    <ButtonsBox>
      <Button
        disabled={loading || outOfExamples}
        onClick={() => dispatch(fetchExampleTasksLoading())}
      >
        {loading
          ? "Ładowanie..."
          : outOfExamples
          ? "Nie ma więcej zadań do pobrania😞"
          : "Pobierz losowe zadanie"}
      </Button>
    </ButtonsBox>
  );
};
