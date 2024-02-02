import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div``;

const ButtonContainer = styled.div`
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    button {
      opacity: 1;
    }
  }
`;

const Name = styled.span`
  font-size: larger;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: larger;
  opacity: 0;
  cursor: pointer;
`;

const DropContainer = styled.div``;

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewInputContainer = styled.div``;

const Icon = styled.span``;

const Input = styled.input``;

const Folder = ({ handleInsert = () => {}, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsert(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <Container>
        <Wrapper>
          <ButtonContainer onClick={() => setExpand(!expand)}>
            <Name>📁{explorer.name}</Name>
            <Buttons>
              <Button
                onClick={(e) => {
                  handleNewFolder(e, true);
                }}
              >
                📁
              </Button>
              <Button
                onClick={(e) => {
                  handleNewFolder(e, false);
                }}
              >
                📄
              </Button>
            </Buttons>
          </ButtonContainer>
          <DropContainer
            style={{ display: expand ? "block" : "none", paddingLeft: 25 }}
          >
            {showInput.visible && (
              <NewInputContainer>
                <Icon>{showInput.isFolder ? "📁" : "📄"}</Icon>
                <Input
                  type="text"
                  onKeyDown={(e) => addFolder(e)}
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </NewInputContainer>
            )}

            {explorer.items.map((exp) => {
              return <Folder explorer={exp} />;
            })}
          </DropContainer>
        </Wrapper>
      </Container>
    );
  } else {
    return (
      <FileContainer>
        <Name>📄{explorer.name}</Name>
      </FileContainer>
    );
  }
};

export default Folder;
