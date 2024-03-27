import { Input } from "../../../../../../ui";
import { IProject } from "../Project.hook";

export function Search(
  props: Pick<IProject, "searchQuery" | "setSearchQuery">
) {
  const { searchQuery, setSearchQuery } = props;

  return (
    <Input
      type="text"
      placeholder="Поиск по названию, описанию"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
