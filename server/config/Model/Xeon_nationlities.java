package cn.edu.dlnu.model;

//�������Model
public class Xeon_nationlities {
	private String nationid;   //�����
	private String nation;     //����

	public String getNationid() {
		return nationid;
	}

	public void setNationid(String nationid) {
		this.nationid = nationid;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	// �������Ĺ��췽��
	public Xeon_nationlities(String nationid, String id) {
		this.nationid = nationid;
		this.nation = nation;
	}

}
